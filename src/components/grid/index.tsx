import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { gridItems } from "@/lib/data";

const Grid = () => {
  return (
    <div className="pb-10">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            className={item.className}
            title={item.title}
            description={item.description}
            // header={item.header}
            // icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Grid;
