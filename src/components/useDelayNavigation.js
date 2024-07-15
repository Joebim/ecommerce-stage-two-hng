import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { Context } from '../api/Context'

const useDelayedNavigation = (delay) => {
  
  const data = useContext(Context)
  const navigate = useNavigate();

  const delayedNavigate = (path, state) => {
    setTimeout(() => {
      navigate(path, { state });
      data.setCart([])
    }, delay);
  };

  return delayedNavigate;
};

export default useDelayedNavigation;