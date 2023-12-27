import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { User, UserSchema } from './model/user.schema';
import { Product, ProductSchema } from './model/product.schema';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

@Module({
	imports: [
	MongooseModule.forRoot('mongodb+srv://dita:dita@cluster0.4368hxm.mongodb.net/?retryWrites=true&w=majority'),
		
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}]),
		JwtModule.register({
			secret,
			signOptions: { expiresIn: '2h' },
		}),
		ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public'),
		}),
	],
	controllers: [AppController, UserController, ProductController],
	providers: [AppService, UserService, ProductService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) { }
}
