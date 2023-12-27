import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './service/user.service';
import { ChartService  } from './service/chart.service';
import { UserController } from './controller/user.controller';
import { ChartController } from './controller/chart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { User, UserSchema } from './model/user.schema';
import { Chart, ChartSchema } from './model/chart.schema';

@Module({
	imports: [
		// MongooseModule.forRoot('mongodb+srv://dita:dita@cluster0.jhsltvn.mongodb.net/?retryWrites=true&w=majority'),

	MongooseModule.forRoot('mongodb+srv://dita:dita@cluster0.4368hxm.mongodb.net/?retryWrites=true&w=majority'),
		
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forFeature([{ name: Chart.name, schema: ChartSchema }]),
		JwtModule.register({
			secret,
			signOptions: { expiresIn: '2h' },
		}),
		ServeStaticModule.forRoot({
		rootPath: join(__dirname, '..', 'public'),
		}),
	],
	controllers: [AppController, UserController, ChartController],
	providers: [AppService, UserService, ChartService],
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) { }
}
