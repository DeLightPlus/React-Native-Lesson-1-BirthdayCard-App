
// export interface CardData {
//   title: {    
//     text: string;
//     fontFamily: string;
//     fontSize: number;
//     fontColor: string;
//     fontStyle: string;
//     fontWeight: string;

//     rotation: number;
//     positionY: number;
//     positionX: number;    
//   };
//   celebrant: {
//     text: string;
//     fontFamily: string;
//     fontSize: number;
//     fontColor: string;
//     fontStyle: string;
//     fontWeight: string;

//     rotation: number;
//     positionY: number;
//     positionX: number;
//   };
//   message: {
//     text: string;
//     fontFamily: string;
//     fontSize: number;
//     fontColor: string;
//     fontStyle: string;
//     fontWeight: string;

//     rotation: number;
//     positionY: number;
//     positionX: number;
//   };
//   birthday: {
//     text: string;
//     fontFamily: string;
//     fontSize: number;
//     fontColor: string;
//     fontStyle: string;
//     fontWeight: string;

//     rotation: number;
//     positionY: number;
//     positionX: number;
//   };
//   backgroundImage: string;
// }

// export interface Position {
//   left: number;
//   top: number;
// }

// Types.ts
export interface FontData {
  text: string;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  fontStyle: string;
  fontWeight?: string;

  rotation: number;
  positionY: number;
  positionX: number;
}
  
export interface CardData {
  title: FontData;
  celebrant: FontData;
  message: FontData;
  birthday: FontData;
  backgroundImage: string;
}
  