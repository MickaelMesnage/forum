import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CreateMessagePage } from "./CreateMessagePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/message/create" element={<CreateMessagePage />} />
      <Route path="/message/list" element={<CreateMessagePage />} />
    </Routes>
  );
};
