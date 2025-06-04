import React from "react";
import BentoGrid, { BentoGridItem } from "./BintoGrid";
import { gridItems } from "@/lib/data";
import { GridItemType } from "@/lib/model";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item: GridItemType, idx: number) => {
          return (
            <BentoGridItem
              key={idx}
              title={item.title}
              description={item.description}
              // header={item.header}
              icon={item.icon}
              className={item.className}
              img={item.img}
              imageClassName={item.imageClassName}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
