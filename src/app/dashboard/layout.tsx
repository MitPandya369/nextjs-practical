export default function DashboardLayout({
  children,
  cart
}: Readonly<{
  children: React.ReactNode;
  cart: React.ReactNode;
}>) {
  return (
    <div className="just grid grid-cols-1 gap-5 md:grid-cols-4">
      <div className="col-span-3">{children}</div>
      {cart}
    </div>
  );
}
