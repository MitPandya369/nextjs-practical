export default function DashboardLayout({
  children,
  cart,
}: Readonly<{
  children: React.ReactNode;
  cart: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-4">
      <div className="col-span-3">{children}</div>
      <div className="place-self-start">{cart}</div>
    </div>
  );
}
