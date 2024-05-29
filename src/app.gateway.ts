import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway, WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ProductService } from './product/product.service';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class AppGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    constructor(private readonly product: ProductService) {
    }
    private logger: Logger = new Logger('AppGateway');

    @SubscribeMessage('pages')
    changePage(@MessageBody() data: string) {
        this.logger.log(`Right now client's on page \'${data}\'`);
        this.server.emit('pages', `ДОБРО ПОЖАЛОВАТЬ НА СТРАНИЦУ "${data}"`);
    }

    @SubscribeMessage('cart')
    addItem() {
        this.logger.log('Client added item to the cart');
        this.server.emit('cart', 'Товар успешно добавлен в корзину');
    }

    @SubscribeMessage('products')
    async findProduct() {
        this.server.emit('products', {products: await this.product.findAllProducts()});
    }

    afterInit(server: Server) {
        this.logger.log('Init');
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    handleConnection(client: Socket, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
}