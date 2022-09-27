import React from 'react'
import './Contest.css'
import GFG from '../../img/GFG.png';
import codechef from '../../img/codechef.png';
import interviewbit from '../../img/interviewbit.png';
import Leetcode from'../../img/LeetCode.png';
import hackerrank from '../../img/hackerrank.png';
 

const Contest = () => {
  return (
     <div className="contest">
        <span>Programming Profiles</span>
        <div className="icon">
        <a href="https://auth.geeksforgeeks.org/user/jaatgfg11/profile"><img src={GFG} alt=""/></a>
          <a href="https://www.interviewbit.com/profile/Somesh_Sangwan"><img src={interviewbit} alt=""/></a>
          <a href="https://leetcode.com/Somesh_Sangwan_07/"><img src={Leetcode} alt=""/></a>
          <a href="https://www.hackerrank.com/2019eeb1201"><img src={hackerrank} alt=""/></a>
           
          </div>
     </div>
  )
}

export default Contest