
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('drawings').del()
    .then(function () {
      // Inserts seed entries
      return knex('drawings').insert([
        {projectName: "Guest bedroom",
          lineCoordinates: '"{"lines":[{"points":[{"x":108.609375,"y":423.28125},{"x":108.609375,"y":423.28125},{"x":108.609375,"y":423.28125},{"x":108.609375,"y":423.28125},{"x":108.609375,"y":419.28125},{"x":108.609375,"y":411.28125},{"x":108.609375,"y":400.28125},{"x":108.609375,"y":389.28125},{"x":108.609375,"y":378.28125},{"x":108.609375,"y":367.28125},{"x":108.609375,"y":356.28125},{"x":108.609375,"y":347.28125},{"x":108.609375,"y":342.28125},{"x":107.609375,"y":336.28125},{"x":106.609375,"y":332.28125},{"x":106.609375,"y":329.28125},{"x":105.609375,"y":327.28125},{"x":105.609375,"y":327.28125},{"x":107.609375,"y":327.28125},{"x":111.609375,"y":326.28125},{"x":122.609375,"y":323.28125},{"x":136.609375,"y":319.28125},{"x":148.609375,"y":316.28125},{"x":163.609375,"y":311.28125},{"x":187.609375,"y":306.28125},{"x":202.609375,"y":302.28125},{"x":209.609375,"y":300.28125},{"x":225.609375,"y":297.28125},{"x":231.609375,"y":295.28125},{"x":236.609375,"y":293.28125},{"x":241.609375,"y":291.28125},{"x":244.609375,"y":290.28125},{"x":247.609375,"y":288.28125},{"x":249.609375,"y":287.28125},{"x":252.609375,"y":286.28125},{"x":254.609375,"y":285.28125},{"x":255.609375,"y":285.28125},{"x":256.609375,"y":285.28125},{"x":258.609375,"y":284.28125},{"x":259.609375,"y":284.28125},{"x":260.609375,"y":284.28125},{"x":261.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":263.609375,"y":284.28125},{"x":263.609375,"y":284.28125},{"x":264.609375,"y":283.28125},{"x":265.609375,"y":283.28125},{"x":266.609375,"y":283.28125},{"x":266.609375,"y":283.28125},{"x":267.609375,"y":283.28125},{"x":267.609375,"y":285.28125},{"x":267.609375,"y":286.28125},{"x":267.609375,"y":291.28125},{"x":265.609375,"y":298.28125},{"x":264.609375,"y":304.28125},{"x":264.609375,"y":308.28125},{"x":263.609375,"y":313.28125},{"x":262.609375,"y":317.28125},{"x":262.609375,"y":320.28125},{"x":262.609375,"y":322.28125},{"x":261.609375,"y":325.28125},{"x":261.609375,"y":328.28125},{"x":261.609375,"y":332.28125},{"x":261.609375,"y":333.28125},{"x":261.609375,"y":335.28125},{"x":261.609375,"y":336.28125},{"x":261.609375,"y":337.28125},{"x":261.609375,"y":338.28125},{"x":261.609375,"y":339.28125},{"x":261.609375,"y":340.28125},{"x":261.609375,"y":341.28125},{"x":261.609375,"y":342.28125},{"x":261.609375,"y":343.28125},{"x":261.609375,"y":345.28125},{"x":261.609375,"y":347.28125},{"x":261.609375,"y":349.28125},{"x":261.609375,"y":351.28125},{"x":261.609375,"y":353.28125},{"x":261.609375,"y":354.28125},{"x":261.609375,"y":357.28125},{"x":262.609375,"y":358.28125},{"x":262.609375,"y":359.28125},{"x":262.609375,"y":360.28125},{"x":262.609375,"y":361.28125},{"x":263.609375,"y":361.28125},{"x":263.609375,"y":361.28125}],"brushColor":"#00000","brushRadius":5},{"points":[{"x":101.609375,"y":333.28125},{"x":101.609375,"y":333.28125},{"x":101.609375,"y":333.28125},{"x":101.609375,"y":333.28125},{"x":102.609375,"y":330.28125},{"x":103.609375,"y":327.28125},{"x":105.609375,"y":321.28125},{"x":108.609375,"y":315.28125},{"x":109.609375,"y":312.28125},{"x":112.609375,"y":304.28125},{"x":114.609375,"y":299.28125},{"x":117.609375,"y":292.28125},{"x":121.609375,"y":284.28125},{"x":123.609375,"y":282.28125},{"x":126.609375,"y":275.28125},{"x":127.609375,"y":272.28125},{"x":128.609375,"y":270.28125},{"x":129.609375,"y":268.28125},{"x":129.609375,"y":268.28125},{"x":129.609375,"y":268.28125},{"x":132.609375,"y":268.28125},{"x":136.609375,"y":268.28125},{"x":140.609375,"y":268.28125},{"x":144.609375,"y":267.28125},{"x":148.609375,"y":266.28125},{"x":155.609375,"y":264.28125},{"x":161.609375,"y":263.28125},{"x":169.609375,"y":262.28125},{"x":174.609375,"y":262.28125},{"x":180.609375,"y":261.28125},{"x":188.609375,"y":261.28125},{"x":192.609375,"y":261.28125},{"x":200.609375,"y":261.28125},{"x":207.609375,"y":260.28125},{"x":211.609375,"y":258.28125},{"x":217.609375,"y":257.28125},{"x":228.609375,"y":254.28125},{"x":232.609375,"y":254.28125},{"x":241.609375,"y":252.28125},{"x":246.609375,"y":251.28125},{"x":250.609375,"y":250.28125},{"x":253.609375,"y":249.28125},{"x":257.609375,"y":248.28125},{"x":259.609375,"y":248.28125},{"x":262.609375,"y":248.28125},{"x":265.609375,"y":247.28125},{"x":267.609375,"y":247.28125},{"x":270.609375,"y":247.28125},{"x":272.609375,"y":247.28125},{"x":274.609375,"y":247.28125},{"x":276.609375,"y":247.28125},{"x":277.609375,"y":247.28125},{"x":278.609375,"y":247.28125},{"x":278.609375,"y":247.28125},{"x":278.609375,"y":248.28125},{"x":278.609375,"y":251.28125},{"x":276.609375,"y":256.28125},{"x":273.609375,"y":261.28125},{"x":271.609375,"y":265.28125},{"x":268.609375,"y":269.28125},{"x":267.609375,"y":272.28125},{"x":266.609375,"y":275.28125},{"x":265.609375,"y":278.28125},{"x":264.609375,"y":280.28125},{"x":263.609375,"y":281.28125},{"x":263.609375,"y":283.28125},{"x":263.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":262.609375,"y":284.28125},{"x":262.609375,"y":284.28125}],"brushColor":"#00000","brushRadius":5},{"points":[{"x":282.609375,"y":260.28125},{"x":282.609375,"y":260.28125},{"x":282.609375,"y":260.28125},{"x":282.609375,"y":261.28125},{"x":282.609375,"y":264.28125},{"x":282.609375,"y":270.28125},{"x":282.609375,"y":278.28125},{"x":282.609375,"y":287.28125},{"x":282.609375,"y":292.28125},{"x":282.609375,"y":298.28125},{"x":282.609375,"y":302.28125},{"x":282.609375,"y":306.28125},{"x":282.609375,"y":309.28125},{"x":282.609375,"y":312.28125},{"x":282.609375,"y":315.28125},{"x":282.609375,"y":318.28125},{"x":283.609375,"y":322.28125},{"x":283.609375,"y":324.28125},{"x":283.609375,"y":325.28125},{"x":283.609375,"y":326.28125},{"x":283.609375,"y":326.28125},{"x":283.609375,"y":326.28125},{"x":282.609375,"y":330.28125},{"x":279.609375,"y":337.28125},{"x":274.609375,"y":346.28125},{"x":268.609375,"y":357.28125},{"x":265.609375,"y":363.28125},{"x":264.609375,"y":366.28125},{"x":263.609375,"y":367.28125},{"x":263.609375,"y":368.28125},{"x":263.609375,"y":368.28125},{"x":262.609375,"y":368.28125},{"x":260.609375,"y":368.28125},{"x":253.609375,"y":369.28125},{"x":239.609375,"y":374.28125},{"x":228.609375,"y":379.28125},{"x":218.609375,"y":383.28125},{"x":204.609375,"y":388.28125},{"x":195.609375,"y":392.28125},{"x":186.609375,"y":395.28125},{"x":175.609375,"y":398.28125},{"x":163.609375,"y":400.28125},{"x":147.609375,"y":405.28125},{"x":141.609375,"y":407.28125},{"x":135.609375,"y":409.28125},{"x":130.609375,"y":411.28125},{"x":126.609375,"y":412.28125},{"x":122.609375,"y":413.28125},{"x":118.609375,"y":414.28125},{"x":113.609375,"y":415.28125},{"x":111.609375,"y":415.28125},{"x":110.609375,"y":415.28125},{"x":109.609375,"y":415.28125},{"x":109.609375,"y":415.28125},{"x":109.609375,"y":415.28125}],"brushColor":"#00000","brushRadius":5},{"points":[{"x":146.609375,"y":322.28125},{"x":146.609375,"y":322.28125},{"x":146.609375,"y":322.28125},{"x":146.609375,"y":324.28125},{"x":146.609375,"y":327.28125},{"x":146.609375,"y":332.28125},{"x":147.609375,"y":339.28125},{"x":147.609375,"y":345.28125},{"x":147.609375,"y":351.28125},{"x":148.609375,"y":355.28125},{"x":148.609375,"y":357.28125},{"x":148.609375,"y":359.28125},{"x":148.609375,"y":360.28125},{"x":148.609375,"y":361.28125},{"x":148.609375,"y":362.28125},{"x":148.609375,"y":363.28125},{"x":148.609375,"y":363.28125},{"x":148.609375,"y":364.28125},{"x":148.609375,"y":365.28125},{"x":148.609375,"y":367.28125},{"x":148.609375,"y":368.28125},{"x":148.609375,"y":369.28125},{"x":148.609375,"y":370.28125},{"x":148.609375,"y":370.28125},{"x":148.609375,"y":370.28125},{"x":148.609375,"y":370.28125},{"x":147.609375,"y":372.28125},{"x":143.609375,"y":376.28125},{"x":141.609375,"y":381.28125},{"x":138.609375,"y":385.28125},{"x":136.609375,"y":389.28125},{"x":134.609375,"y":392.28125},{"x":132.609375,"y":395.28125},{"x":131.609375,"y":397.28125},{"x":129.609375,"y":399.28125},{"x":127.609375,"y":402.28125},{"x":126.609375,"y":405.28125},{"x":125.609375,"y":407.28125},{"x":123.609375,"y":409.28125},{"x":122.609375,"y":410.28125},{"x":122.609375,"y":410.28125},{"x":121.609375,"y":411.28125},{"x":120.609375,"y":412.28125},{"x":120.609375,"y":412.28125},{"x":120.609375,"y":412.28125},{"x":120.609375,"y":413.28125},{"x":120.609375,"y":413.28125},{"x":120.609375,"y":413.28125}],"brushColor":"#00000","brushRadius":5},{"points":[{"x":151.609375,"y":373.28125},{"x":151.609375,"y":373.28125},{"x":151.609375,"y":373.28125},{"x":151.609375,"y":373.28125},{"x":155.609375,"y":373.28125},{"x":156.609375,"y":373.28125},{"x":158.609375,"y":373.28125},{"x":165.609375,"y":370.28125},{"x":170.609375,"y":368.28125},{"x":176.609375,"y":366.28125},{"x":182.609375,"y":364.28125},{"x":187.609375,"y":362.28125},{"x":193.609375,"y":361.28125},{"x":197.609375,"y":360.28125},{"x":202.609375,"y":358.28125},{"x":206.609375,"y":357.28125},{"x":210.609375,"y":355.28125},{"x":215.609375,"y":354.28125},{"x":219.609375,"y":352.28125},{"x":221.609375,"y":352.28125},{"x":224.609375,"y":351.28125},{"x":226.609375,"y":350.28125},{"x":227.609375,"y":349.28125},{"x":229.609375,"y":349.28125},{"x":231.609375,"y":348.28125},{"x":233.609375,"y":348.28125},{"x":234.609375,"y":347.28125},{"x":236.609375,"y":347.28125},{"x":237.609375,"y":346.28125},{"x":238.609375,"y":346.28125},{"x":239.609375,"y":345.28125},{"x":240.609375,"y":344.28125},{"x":242.609375,"y":343.28125},{"x":245.609375,"y":342.28125},{"x":246.609375,"y":342.28125},{"x":247.609375,"y":341.28125},{"x":249.609375,"y":340.28125},{"x":250.609375,"y":340.28125},{"x":252.609375,"y":339.28125},{"x":253.609375,"y":338.28125},{"x":255.609375,"y":338.28125},{"x":256.609375,"y":337.28125},{"x":257.609375,"y":337.28125},{"x":259.609375,"y":336.28125},{"x":260.609375,"y":335.28125},{"x":262.609375,"y":335.28125},{"x":264.609375,"y":334.28125},{"x":267.609375,"y":333.28125},{"x":269.609375,"y":333.28125},{"x":272.609375,"y":332.28125},{"x":274.609375,"y":332.28125},{"x":275.609375,"y":331.28125},{"x":278.609375,"y":330.28125},{"x":280.609375,"y":330.28125},{"x":282.609375,"y":329.28125},{"x":284.609375,"y":328.28125},{"x":285.609375,"y":328.28125},{"x":286.609375,"y":328.28125},{"x":286.609375,"y":328.28125},{"x":286.609375,"y":328.28125},{"x":286.609375,"y":328.28125}],"brushColor":"#00000","brushRadius":5}],"width":800,"height":500}"', 
        image:'https://images.unsplash.com/flagged/photo-1556438758-872c68902f60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=753&q=80'
        }
      ]);
    });
};

