import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from './FormInput';
import Button from './Button';
import Link from './Link';

const AuthenticationCard: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // In a real app, you would handle the authentication logic here
  };

  return (
    <Card className="w-[400px] border-0 shadow-lg bg-card p-6">
      <CardHeader className="p-2 text-center">
        <CardTitle className="text-2xl font-bold text-card-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <form onSubmit={handleSubmit} className="space-y-6 pt-2">
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <div>
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <div className="mt-2 text-right">
              <Link href="#">Forgot Password</Link>
            </div>
          </div>
          <div className="pt-4">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center p-2 pt-6">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="#">SignUp</Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthenticationCard;
