import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemeView from '@/presentation/shared/ThemeView';
import React, { useState } from 'react';
import ThemedSwitch from '../../presentation/shared/ThemedSwitch';

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemeView margin className='mt-2'>
      <ThemeCard>
        <ThemedSwitch
          text='Activo'
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className='my-4'
        />

        <ThemedSwitch
          text='Hambriento'
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className='mb-4'
        />

        <ThemedSwitch
          text='Contento'
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className='mb-4'
        />
      </ThemeCard>
    </ThemeView>
  );
};

export default Switches;