// app/community/page.tsx
import StageForm from '@/components/community/StageForm';

export default function CommunityEntryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          Startup Community Portal
        </h1>
        <StageForm />
      </main>
    </div>
  );
}