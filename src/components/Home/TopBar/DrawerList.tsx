import { CSSProperties } from "react";
import { topBarItemsData as itemsData, content } from "./raw";
import TopBarButton from "../../UIComponents/Button";

export default () => {
  return (
    <div className="mt-10">
      {itemsData.map((item) => (
        <div
          key={item.id}
          className="text-lg flex items-center my-2 hover:text-secondary cursor-pointer font-gilroyBold"
        >
          <item.icon /> <h2 className={"ml-2"}>{item.heading}</h2>
        </div>
      ))}
      <div className="mt-10">
        <TopBarButton>{content.joinUs}</TopBarButton>
      </div>
    </div>
  );
};
