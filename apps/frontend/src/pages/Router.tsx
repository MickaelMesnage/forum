import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { MessageCreatePage } from "./MessageCreatePage";
import { MessageListPage } from "./MessageListPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/message/create" element={<MessageCreatePage />} />
      <Route path="/message/list" element={<MessageListPage />} />
    </Routes>
  );
};
