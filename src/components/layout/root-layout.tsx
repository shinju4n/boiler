const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center w-full h-[100dvh] bg-">
      <div className="w-full h-full bg-blue-500 max-w-md max-h-[100dvh] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
