import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [OffersModule, UsersModule, WishesModule, WishlistsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
