import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { paths } from "@/pages/paths";
import { useMe } from "@/api/entities/users";
import * as Pages from "@/pages";

export const Router = () => {
  const { error: loginError } = useMe();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginError) {
      navigate(paths.login);
    }
  }, [loginError]);

  return (
    <Routes>
      <Route path={paths.home} element={<Pages.Home />} />
      <Route path={paths.login} element={<Pages.Login />} />
      <Route path={paths.createPost} element={<Pages.CreatePost />} />
    </Routes>
  );
};
