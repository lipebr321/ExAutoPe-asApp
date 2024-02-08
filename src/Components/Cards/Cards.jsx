import React from 'react';
import { Card as PaperCard, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native';

const Card = ({ title, content, imageUri, imageSource }) => {
    return (
        <PaperCard style={{ width: 220, height: 300, marginHorizontal: 5, marginBottom: 40, marginTop: 10 }}>
            <Image source={imageSource} style={{ width: '100%', height: 90, marginBottom: 100, marginTop: 20 }} />
            <PaperCard.Content>
                <Title>{title}</Title>
                <Paragraph>{content}</Paragraph>
            </PaperCard.Content>
        </PaperCard>
    );
};
export default Card;