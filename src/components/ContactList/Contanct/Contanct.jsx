import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Contanct.scss';

import Avatar from './Avatar/Avatar';
import Favourite from './Favourite/Favourite';
import Edit from './Edit/Edit';
import Button from '../../Button/Button';

function Contanct(props) {
  const [isVisible, setVisiblity] = useState(false);
  const showAdditionalInfo = () => {
    setVisiblity(!isVisible);
  };

  return (
    <div className="contact-container-position">
      <div className="contact-container">
 
        <div className="header">
          <Edit />
          <Favourite isFavourite={ props.favorite } />
        </div>
        <div className="main-info">
          <Avatar
            className="main-info__avatar"
            src={ props.avatar }
          />

          <h2 className="main-info__name text">{ props.name }</h2>
        </div>

        <div>
          <div className="basic-info">
            <div className="basic-info__row">
              <svg className="basic-info__icon" width="16" height="24" viewBox="0 0 37 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.7725 18.2334C23.6958 20.3101 21.1548 21.3628 18.2197 21.3628C15.2856 21.3628 12.7446 20.3098 10.668 18.2336C8.59082 16.1572 7.53809 13.6162 7.53809 10.6812C7.53809 7.74658 8.59082 5.20557 10.6675 3.12915C12.7441 1.05249 15.2847 0 18.2197 0C21.1543 0 23.6953 1.05249 25.772 3.12866C27.8491 5.20581 28.9014 7.74683 28.9014 10.6812C28.9014 13.6162 27.8491 16.157 25.7725 18.2334ZM36.5508 31.2993C36.7295 32.2947 36.8506 33.2373 36.9102 34.1016C36.9697 34.946 36.9995 35.8274 37 36.7212C37 39.0371 36.2642 40.9116 34.8125 42.2927C33.3789 43.657 31.4834 44.3486 29.1768 44.3486H7.82324C5.5166 44.3486 3.62012 43.6565 2.18701 42.2927C0.73584 40.9106 0 39.0364 0 36.7214C0 35.8318 0.0297852 34.9512 0.0888672 34.1025C0.148438 33.2363 0.269531 32.2935 0.447754 31.2993C0.62793 30.2964 0.859863 29.3486 1.13672 28.4822C1.42383 27.5859 1.81348 26.7019 2.29492 25.8542C2.79443 24.9749 3.38232 24.2092 4.04102 23.5786C4.73096 22.9185 5.5752 22.3882 6.55029 22.0022C7.52197 21.6172 8.59961 21.4219 9.75244 21.4219C9.97949 21.4219 10.2026 21.4685 10.4746 21.584C10.7456 21.6992 11.0659 21.8833 11.4878 22.1582C12.0161 22.5022 12.625 22.8948 13.2983 23.3247C13.8784 23.6948 14.6655 24.0417 15.6367 24.3555C16.5859 24.6624 17.5483 24.8179 18.499 24.8179C19.1128 24.8179 19.7324 24.7529 20.3496 24.6243C20.688 24.5537 21.0254 24.4641 21.3608 24.3555C22.333 24.0415 23.1196 23.6946 23.7007 23.3245C24.3804 22.8904 24.9888 22.4978 25.5093 22.1584C25.9653 21.8616 26.3027 21.6709 26.5874 21.5581C26.8311 21.4617 27.0366 21.4221 27.2451 21.4221C28.3979 21.4221 29.4756 21.6172 30.4482 22.0017C31.4238 22.3884 32.2681 22.9187 32.957 23.5781C33.6162 24.2085 34.2036 24.9746 34.7036 25.8542C35.1855 26.7019 35.5752 27.5862 35.8618 28.4819C36.1392 29.3484 36.3711 30.2964 36.5508 31.2993Z" fill="#3E2093"/>
              </svg>
              <div className="basic-info__username sub-text-style">Username:</div>
              <div className="text-style">{ props.username }</div>
            </div>
          </div>

          <div className="basic-info">
            <div className="basic-info__row">
              <svg className="basic-info__icon"  width="24" height="14" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.6586 2.41454C33.6586 2.37605 33.6851 2.33859 33.6833 2.30054L23.4043 12.2049L33.671 21.7929C33.677 21.7244 33.6586 21.6554 33.6586 21.5854V2.41454V2.41454Z" fill="#3E2093"/>
                <path d="M21.8353 13.7292L17.6391 17.7665C17.4267 17.9708 17.1525 18.0732 16.8781 18.0732C16.6094 18.0732 16.3407 17.9752 16.1299 17.7787L11.9451 13.8791L1.61133 23.8397C1.8626 23.93 2.1323 24.0001 2.41474 24.0001H31.3416C31.761 24.0001 32.1544 23.8723 32.4964 23.6818L21.8353 13.7292Z" fill="#3E2093"/>
                <path d="M16.8659 15.4642L32.5531 0.352829C32.198 0.141658 31.7845 0 31.3414 0H2.41453C1.83751 0 1.30878 0.224049 0.896973 0.565756L16.8659 15.4642Z" fill="#3E2093"/>
                <path d="M0 2.78271V21.5853C0 21.8011 0.0496098 22.0092 0.103463 22.2081L10.309 12.3804L0 2.78271Z" fill="#3E2093"/>
              </svg>
              <div className="basic-info__username sub-text-style">Email:</div>
              <div className="text-style">{ props.email }</div>
            </div>
          </div>

          <div className="basic-info">
            <div className="basic-info__row">
              <svg className="basic-info__icon"  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3216 17.6136L19.9723 14.2643C18.7761 13.0681 16.7426 13.5466 16.2642 15.1016C15.9053 16.1782 14.7092 16.7763 13.6326 16.537C11.2403 15.9389 8.01062 12.8289 7.41254 10.3169C7.05369 9.24034 7.77139 8.04418 8.84794 7.68537C10.403 7.20691 10.8814 5.17342 9.68525 3.97726L6.33599 0.627988C5.37905 -0.209329 3.94365 -0.209329 3.10633 0.627988L0.833617 2.90071C-1.4391 5.29304 1.07285 11.6327 6.69484 17.2547C12.3168 22.8767 18.6565 25.5083 21.0488 23.1159L23.3216 20.8432C24.1589 19.8863 24.1589 18.4509 23.3216 17.6136Z" fill="#3E2093"/>
              </svg>
              <div className="basic-info__username sub-text-style">Phone:</div>
              <div className="text-style">{ props.phone }</div>
            </div>
          </div>

          <Button
            className="addition-info-button"
            styleType="bordered"
            type="button"
            onClick={ showAdditionalInfo }
          >
            { isVisible === true ? 'Hide addition info' : 'Show addition info' }
          </Button>
          {
            isVisible ?
            <div className="additional-info-container">
              <table className="additional-info">
                <tbody>
                  <tr>
                    <td className="sub-text-style">City:</td>
                    <td className="text-style">{ props.city }</td>
                  </tr>
                  <tr>
                    <td className="sub-text-style">State:</td>
                    <td className="text-style">{ props.state }</td>
                  </tr>
                  <tr>
                    <td className="sub-text-style">Country:</td>
                    <td className="text-style">{ props.country }</td>
                  </tr>
                  <tr>
                    <td className="sub-text-style">Zipcode:</td>
                    <td className="text-style">{ props.zipcode }</td>
                  </tr>

                  <br/>

                  <tr>
                    <td className="sub-text-style">Business:</td>
                    <td className="text-style">{ props.business }</td>
                  </tr>
                  <tr>
                    <td className="sub-text-style">Catch phrase:</td>
                    <td className="text-style">{ props.catchPhrase }</td>
                  </tr>
                  <tr>
                    <td className="sub-text-style">Company name:</td>
                    <td className="text-style">{ props.companyName }</td>
                  </tr>

                  <br/>

                  <tr>
                    <td className="sub-text-style">Website:</td>
                    <td className="text-style">{ props.website }</td>
                  </tr>
                </tbody>
              </table>
            </div> : null
          }
        </div>
      </div>
    </div>
  );
}

Contanct.prototype = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,

  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  zipcode: PropTypes.string,

  business: PropTypes.string,
  catchPhrase: PropTypes.string,
  companyName: PropTypes.string,

  phone: PropTypes.string,
  website: PropTypes.string,

  favorite: PropTypes.bool,
  avatar: PropTypes.string
};

export default Contanct;
