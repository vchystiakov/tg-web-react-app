// File with Header module

// import React module
import React from 'react';
// import module with Button;
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
  const { onClose, user } = useTelegram();
  return (
    <div className={'header'}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>{user?.username}</span>
    </div>
  );
};

export default Header;
