import styled, {
  createX,
  compose,
  space,
  backgroundColor,
} from '@xstyled/styled-components';

const x = createX(compose(space, backgroundColor));

const CustomBox = styled(x.div)`
  background: red;
  color: #fff;
`;

const Box = (props) => {
  return <CustomBox {...props} />;
};

export default Box;
