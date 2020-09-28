import React, { useEffect } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from '../../store/actions/fetch-users';

import Contanct from './Contanct/Contanct';
// import Loader from '../Loader/Loader';

import './ContactList.scss';

function ContactList() {
  const dispatch = useDispatch();

  // const isUserListLoading = useSelector((state) => state.users.isLoading);
  const userList = useSelector((state) => state.users.list);

  const showContactList = () => {
    dispatch(fetchUsersData());
  };

  useEffect(() => {
    showContactList();
  });

  return (
    <div>
      {
        userList.map((contactInfo, key) => {
          return (
            <Contanct
              key={key}

              name={ contactInfo.name }
              username={ contactInfo.username }
              email={ contactInfo.email }

              city={ contactInfo.address.city }
              state={ contactInfo.address.state }
              country={ contactInfo.address.country }
              zipcode={ contactInfo.address.zipcode }

              business={ contactInfo.company.bs }
              catchPhrase={ contactInfo.company.catchPhrase }
              companyName={ contactInfo.company.name }

              phone={ contactInfo.phone }
              website={ contactInfo.website }

              favorite={ contactInfo.favorite }
              avatar={ contactInfo.avatar }
            />
          );
        })
      }
    </div>
  );
}

export default connect()(ContactList);
