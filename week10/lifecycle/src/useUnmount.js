import { useEffect } from 'react';

const useUnmount = (callback) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};

export default useUnmount;