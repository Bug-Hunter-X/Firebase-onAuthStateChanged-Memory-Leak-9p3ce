import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; // Import your Firebase authentication instance

function MyComponent() {
  const [user, setUser] = useState(null);
  const [unsubscribe, setUnsubscribe] = useState(null);

  useEffect(() => {
    const unsubscribeListener = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    setUnsubscribe(unsubscribeListener);

    return () => {
      if (unsubscribeListener) {
        unsubscribeListener();
      }
    };
  }, []);

  return (
    <div>
      {user ? <p>User ID: {user.uid}</p> : <p>User is not signed in</p>}
    </div>
  );
}

export default MyComponent;
