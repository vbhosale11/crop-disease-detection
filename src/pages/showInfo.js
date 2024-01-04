import { Card, Image, Text } from "@mantine/core";

export default function ShowInfo({ data}) {
    return (
        <div>
      <h2>Analysis of the Crop</h2>
      {/* Map over the data and render accordingly */}
      {data.map((item) => (
         <Card
         shadow="sm"
         padding="xl"
         component="a"
         href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
         target="_blank"
       >
         <Card.Section>
           <Image
             src={item.imgUrl}
             h={300}
             w={400}
             alt="No way!"
           />
         </Card.Section>
   
         <Text fw={500} size="lg" mt="md">
           {item.labelVal}
         </Text>
   
         <Text mt="xs" c="dimmed" size="sm" >
              {item.coordinatesVal}
         </Text>
       </Card>
      ))}
    </div>
    );
}