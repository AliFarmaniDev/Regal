/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //set projects color
      colors: {
        //01 primary colors
        'primary': '#B19276',
        //shade colors
        'shade-9': '#120F0C',
        'shade-8': '#231D18',
        'shade-7': '#352C23',
        'shade-6': '#473A2F',
        'shade-5': '#59493B',
        'shade-4': '#6A5847',
        'shade-3': '#7C6653',
        'shade-2': '#8E755E',
        'shade-1': '#9F836A',
        //tints colors
        'tint-9': '#B99D84',
        'tint-8': '#C1A891',
        'tint-7': '#C8B39F',
        'tint-6': '#D0BEAD',
        'tint-5': '#D8C8BB',
        'tint-4': '#E0D3C8',
        'tint-3': '#E8DED6',
        'tint-2': '#EFE9E4',
        'tint-1': '#F7F4F1',
        //02 neutral colors
        'gray-13': '#23242E',
        'gray-12': '#2E2F39',
        'gray-11': '#3C3D45',
        'gray-10': '#54555D',
        'gray-9': '#6D6D74',
        'gray-8': '#85858B',
        'gray-7': '#9D9EA2',
        'gray-6': '#B6B6B9',
        'gray-5': '#CECED1',
        'gray-4': '#E7E7E8',
        'gray-3': '#F2F2F3',
        'gray-2': '#F7F7F8',
        'gray-1': '#FAFAFA',
        //03 state colors
        //error colors
        'error': '#FF6666',
        'err-shade-4': '#331414',
        'err-shade-3': '#662929',
        'err-shade-2': '#993D3D',
        'err-shade-1': '#CC5252',
        'err-tint-4': '#FF8585',
        'err-tint-3': '#FFA3A3',
        'err-tint-2': '#FFC2C2',
        'err-tint-1': '#FFE0E0',
        //success colors
        'success': '#32CD32',
        'succ-shade-4': '#0A290A',
        'succ-shade-3': '#145214',
        'succ-shade-2': '#1E7B1E',
        'succ-shade-1': '#28A428',
        'succ-tint-4': '#6FE36F',
        'succ-tint-3': '#9CEC9C',
        'succ-tint-2': '#CBF5CB',
        'succ-tint-1': '#F3FDF3',
        //warning colors
        'warning': '#FFC107',
        'warn-shade-4': '#332701',
        'warn-shade-3': '#664D03',
        'warn-shade-2': '#997404',
        'warn-shade-1': '#CC9A06',
        'warn-tint-4': '#FFDF7D',
        'warn-tint-3': '#FFE9A8',
        'warn-tint-2': '#FFF4D4',
        'warn-tint-1': '#FFFCF5',
        //info colors
        'info': '#1E90FF',
        'info-shade-4': '#061D33',
        'info-shade-3': '#0C3A66',
        'info-shade-2': '#125699',
        'info-shade-1': '#1873CC',
        'info-tint-4': '#7DBFFF',
        'info-tint-3': '#A9D5FF',
        'info-tint-2': '#D4EAFF',
        'info-tint-1': '#F4F9FF',
      }
    },
  },
  plugins: [],
}