import { View } from '@tarojs/components'
import "./tarot.scss";

import backgroundImage from '../../../assets/views/pages/tarot/tarot-background.jpg';



function TarotCard(position: any, imageUrl:any){
    return (
        <View className="tarot-card">
          {imageUrl ? <img src={imageUrl} alt={`Card ${position}`} /> : position}
        </View>
      );
}


export function Tarot() {
    return (
        <View className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((position) => (
            <TarotCard value={position}/>
          ))}
        </View>
      );
}