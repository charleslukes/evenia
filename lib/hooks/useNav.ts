import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useRouter } from "next/navigation";

const useNav = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    signOut();
  };

  const handleSearch = () => {
  }
  
  const handleCreateEvent = () => {
    router.push("/create-event")
  }

  return {
    session,
    providers,
    handleSignOut,
    signIn,
    handleSearch, 
    handleCreateEvent
  };
};

export default useNav;