import { app } from '@/firebase/config';
import { getAuth } from 'firebase-admin/auth';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const idToken = req.body.idToken;
  const claims = await getAuth(app).verifyIdToken(idToken);
  console.log('got to setCustomClaims');
  if (
    typeof claims.email !== undefined &&
    typeof claims.email_verified !== undefined &&
    claims.email_verified
  ) {
    await getAuth(app).setCustomUserClaims(claims.sub, { isAdmin: true });

    res.send(JSON.stringify({ status: 'success' }));
  } else {
    res.send(JSON.stringify({ status: 'ineligible' }));
  }
}
