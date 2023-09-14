import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div>
      <h2>Profile</h2>
      <div>
        Name: <span style={{ fontWeight: '700' }}>{session?.user?.name}</span>
      </div>
      <div>
        Email: <span style={{ fontWeight: '700' }}>{session?.user?.email}</span>
      </div>
    </div>
  );
}
