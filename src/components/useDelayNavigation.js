import { useNavigate } from 'react-router-dom';

const useDelayedNavigation = (delay) => {
  const navigate = useNavigate();

  const delayedNavigate = (path) => {
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return delayedNavigate;
};

export default useDelayedNavigation;
