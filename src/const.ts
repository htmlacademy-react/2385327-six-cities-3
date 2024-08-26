export const FirstOfferCardSettings = {
  price: 120,
  imageSrc: 'img/apartment-01.jpg',
  heading: 'Beautiful &amp; luxurious apartment at great location',
  type: 'Apartment'
};

export const SecondOfferCardSettings = {
  price: 80,
  imageSrc: 'img/room.jpg',
  heading: 'Wood and stone place',
  type: 'Room'
};

export const ThirdOfferCardSettings = {
  price: 132,
  imageSrc: 'img/apartment-02.jpg',
  heading: 'Canal View Prinsengracht',
  type: 'Apartment'
};

export const FourthOfferCardSettings = {
  price: 180,
  imageSrc: 'img/apartment-03.jpg',
  heading: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment'
};

export const FifthOfferCardSettings = {
  price: 80,
  imageSrc: 'img/room.jpg',
  heading: 'Wood and stone place',
  type: 'Room'
};

export enum AppRoute {
  Main = '/',
  Login ='/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
