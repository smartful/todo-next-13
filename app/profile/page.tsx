'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  console.log('session.user : ', session?.user);
  return (
    <div>
      <h2>Profile</h2>
      <div>
        Firstname: <span style={{ fontWeight: '700' }}>{session?.user?.firstname}</span>
      </div>
      <div>
        Lastname: <span style={{ fontWeight: '700' }}>{session?.user?.lastname}</span>
      </div>
      <div>
        Email: <span style={{ fontWeight: '700' }}>{session?.user?.email}</span>
      </div>
    </div>
  );
}
