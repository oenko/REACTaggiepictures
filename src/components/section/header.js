
import React from 'react';
import { TokenBanners } from './sub/token_banners';



export function Header() {

  return (
      <nav className='nav'>
        <p className="bottom-space-sm" />
        <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
          <div className='mobile-shrink'>
            <div className="title">
              <div className='cool-text'>AGGIE</div>
              <div className='cool-text-md'>PICTURES</div>
            </div>
          </div>
          <TokenBanners />
        </div>
          
        <p className="bottom-space-sm" />
      </nav>
  );
}