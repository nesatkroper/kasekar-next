import React from "react";
import CategoryEdit from "./edit";
import { useTranslation } from "react-i18next";
import { generateColumns } from "@/components/base/table/generate-column";

const Edit = ({ item }) => {
  return <CategoryEdit items={item} />;
};

export const CategoryColumns = () => {
  const [t] = useTranslation("admin");

  return generateColumns(
    [
      { key: "picture", label: t("table.pic") },
      { key: "categoryName", label: t("table.cate.name") },
      { key: "categoryCode", label: t("table.cate.code") },
      { key: "memo", label: t("table.desc") },
      { key: "status", label: t("table.status") },
    ],
    (item) => <Edit item={item} />,
    "department"
  );
};
