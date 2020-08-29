import React from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  Feather,
  Octicons,
  Ionicons,
} from '@expo/vector-icons';

import { colors } from './colors';

const defaultIconStyle = { size: 32 };

export const sections = [
  {
    title: 'Animated Layout',
    color: colors[0],
    githubLink: 'GitHub Link',
    icon: <Feather color={colors[0]} name="layout" {...defaultIconStyle} />,
  },
  {
    title: 'Skew Scroll',
    color: colors[1],
    githubLink: 'GitHub Link',
    icon: (
      <MaterialCommunityIcons
        color={colors[1]}
        name="skew-more"
        {...defaultIconStyle}
      />
    ),
  },
  {
    title: 'Animated Wallet',
    color: colors[2],
    githubLink: 'GitHub Link',
    icon: (
      <MaterialCommunityIcons
        color={colors[2]}
        name="wallet-outline"
        {...defaultIconStyle}
      />
    ),
  },
  {
    title: 'Dot Inversion',
    color: colors[3],
    githubLink: 'GitHub Link',
    icon: (
      <Octicons color={colors[3]} name="primitive-dot" {...defaultIconStyle} />
    ),
  },
  {
    title: 'Animated Accordion',
    color: colors[4],
    githubLink: 'GitHub Link',
    icon: <Entypo color={colors[4]} name="list" {...defaultIconStyle} />,
  },
  {
    title: 'Movies Carousel',
    color: colors[6],
    githubLink: 'GitHub Link',
    icon: (
      <MaterialCommunityIcons
        color={colors[6]}
        name="movie-open-outline"
        {...defaultIconStyle}
      />
    ),
  },
  {
    title: 'Headphone Carousel',
    color: colors[5],
    githubLink: 'GitHub Link',
    icon: (
      <Ionicons color={colors[5]} name="md-headset" {...defaultIconStyle} />
    ),
  },
];
