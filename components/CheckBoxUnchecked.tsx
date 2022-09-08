import Svg, { Path } from 'react-native-svg';

const CheckBoxUnchecked = () => (
  <Svg
    width={37}
    height={37}
    fill="none"
  >
    <Path
      d="M13.971 33.5h9c7.5 0 10.5-3 10.5-10.5v-9c0-7.5-3-10.5-10.5-10.5h-9c-7.5 0-10.5 3-10.5 10.5v9c0 7.5 3 10.5 10.5 10.5Z"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.34}
      d="m12.096 18.5 4.245 4.245 8.505-8.49"
      stroke="#3B3B3B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default CheckBoxUnchecked
