import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidUnknownValues : true,
    transform : true,
    validateCustomDecorators : true,
    transformOptions:{
      enableImplicitConversion:true
    }
  }))

  const configSwagger = new DocumentBuilder()
  .setTitle('Point of sale documentation')
  .setDescription('Dokumentasi untuk api point of sale')
  .setVersion('1.2')
  .addBearerAuth()
  .build()

  const configCustomSwagger : SwaggerCustomOptions = {
    swaggerOptions : { docExpansion : "none" }
  }
  
  const doc = SwaggerModule.createDocument(app,configSwagger)
  SwaggerModule.setup('doc',app, doc, configCustomSwagger)
  await app.listen(3000);
}
bootstrap();
