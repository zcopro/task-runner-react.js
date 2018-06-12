// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import IconBase from 'react-icons-kit';
import { cornerUpLeft } from 'react-icons-kit/feather/cornerUpLeft';

import { COLORS } from '../../constants';

import Paragraph from '../Paragraph';
import Spacer from '../Spacer';
import Button from '../Button';

type Props = {
  onDismiss: () => void,
  isVisible: boolean,
};

class IntroductionBlurb extends PureComponent<Props> {
  render() {
    const { onDismiss, isVisible } = this.props;

    return (
      <Wrapper isVisible={isVisible}>
        <LargeIconWrapper>
          <IconBase size={72} icon={cornerUpLeft} />
        </LargeIconWrapper>

        <Heading>
          This is the <Em>Projects Sidebar</Em>.
        </Heading>

        <Paragraph>
          Your new project was just added! As you create more projects, they'll
          show up here too.
        </Paragraph>

        <Spacer size={20} />
        <Button size="large" onClick={onDismiss}>
          Got it
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div.attrs({
  style: props => ({
    opacity: props.isVisible ? 1 : 0,
    transition: props.isVisible ? '2000ms 100ms' : '250ms',
    transform: props.isVisible ? 'translateX(100%)' : 'translateX(105%)',
    pointerEvents: props.isVisible ? 'auto' : 'none',
  }),
})`
  position: absolute;
  top: 36px;
  right: 0;
  width: 450px;
  padding-left: 56px;
  color: ${COLORS.gray[800]};
  will-change: transform;
`;

const LargeIconWrapper = styled.div`
  transform: translateX(-42px);
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Em = styled.em`
  font-style: italic;
  color: ${COLORS.purple[500]};
`;

export default IntroductionBlurb;
