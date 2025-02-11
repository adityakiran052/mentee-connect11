import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import MentorLogin from "./pages/MentorLogin";
import MentorRegister from "./pages/MentorRegister";
import MentorDashboard from "./pages/MentorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/mentor-login" element={<MentorLogin />} />
          <Route path="/mentor-register" element={<MentorRegister />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;