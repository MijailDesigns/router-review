import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";

import { lazy, Suspense } from "react";
import { sleep } from "./lib/sleep";
import PrivateRoute from "./auth/components/PrivateRoute";

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import("./chat/layout/ChatLayout");
});

const ChatPage = lazy(async () => {
  return import("./chat/pages/ChatPage");
});

const NoChatSelectedPage = lazy(async () => {
  return import("./chat/pages/NoChatSelectedPage");
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen">
                  <div className="spinner-border animate-spin rounded-full border-4 border-gray-200 border-t-4 border-t-purple-600 h-12 w-12"></div>
                </div>
              }
            >
              <PrivateRoute isAuthenticated={false}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
