export default function MealsSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="text-white">
      <h3>This is slug page</h3>
      <span>Slug: {params.slug}</span>
    </main>
  );
}
