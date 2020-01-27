import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faTrashAlt,
  faShareSquare,
  faEllipsisV,
  faArrowLeft,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Icon = icon => props => <FontAwesomeIcon icon={icon} {...props} />;

export const DeleteIcon = Icon(faTrashAlt);

export const ShareIcon = Icon(faShareSquare);

export const DotsIcon = Icon(faEllipsisV);

export const BackIcon = Icon(faArrowLeft);

export const SignOutIcon = Icon(faSignOutAlt);
