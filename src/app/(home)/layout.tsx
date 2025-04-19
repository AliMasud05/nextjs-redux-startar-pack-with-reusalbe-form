// app/common/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import HomeWrapper from "@/components/wrappers/HomeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Site Name",
  description: "Your site description",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeWrapper>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="dark:bg-black bg-white">

        {children}
        </div>
      </ThemeProvider>
    </HomeWrapper>
  );
};

export default CommonLayout;