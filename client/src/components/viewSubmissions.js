import React, { useEffect, useState } from 'react'
import Submission from './submission'
import axios from 'axios'
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// const ddata = [
//   {
//     username: 'aman',
//     lang: 'cpp',
//     stdin: `2
// 5 1
// 10200
// 7 3
// 1432219`,
//     code: `#include <iostream>
// using namespace std;

// void solve(int n,int k, string s){
//  char arr[n];
//  int top = -1;
//  for(int i=0;i<n;i++){
//   while(top>=0 && k>0 && s[i]<arr[top]){
//    top--;
//    k=k-1;
//   }
//   top++;
//   arr[top]=s[i];
//  }
//  // cout<<k<<endl;
//  while(k>0){
//   k--;
//   top--;
//  }

//  // cout<<top<<endl;
//  if(top<0){
//   cout<<0<<endl;
//  }else{
//   string res = "";
//   for(int i=0;i<=top;i++){
//    res += arr[i];
//   }
//   cout<<stoi(res)<<endl;
//  }
// }

// int main()
// {
//  int tc;
//  cin >> tc;

//  while (tc--)
//  {
//   int n,k;cin>>n>>k;
//   string s;cin>>s;
//   solve(n,k,s);
//  }
// }`,
//   },
//   {
//     username: 'aman',
//     lang: 'cpp',
//     stdin: `1
// 8
// 10
// 8
// 9
// 5
// 4
// 6
// 7
// 9`,
//     code: `#include<iostream>
// using namespace std;
// typedef long long ll;

// void solve(){
//  int n;cin>>n;
//  int arr[n];
//  int sz = 0;
//  int mat[n][2];
//  for(int i=0;i<n;i++){
//   cin>> arr[i];
//   while(sz>0 && mat[sz-1][0]<=arr[i]){
//    sz--;
//   }
//   int ans = i+1;
//   if(sz>0){
//    ans -= mat[sz-1][1]+1;
//   }
//   cout<<ans<<endl;
//   mat[sz][0]=arr[i];
//   mat[sz][1]=i;
//   sz++;
//  }

 
// }
// int main(){
//  int tc;cin>>tc;
//  while(tc--){
//   solve();
//  }
// }`,
//   },
//   {
//     username: 'aman',
//     lang: 'cpp',
//     stdin: `6 11
// 1 3
// 1 4
// 1 5
// 1 6
// 2 3
// 2 4
// 2 5
// 2 6
// 3 4
// 3 5
// 3 6`,
//     code: `#include <iostream>
// #include <vector>
// #include <set>

// using namespace std;

// int main(){
//  int n,m;cin>>n>>m;
//  set<int> adj[n+1];
//  for(int i=0;i<m;i++){
//   int x,y;cin>>x>>y;
//   adj[x].insert(y);
//   adj[y].insert(x);
//  }

//  set<int> rem;
//  for(int i=1;i<=n;i++){
//   rem.insert(i);
//  }
//  int res = 0;
//  while(!rem.empty()){
//   set<int> avl;
//   avl.insert(*rem.begin());
//   rem.erase(rem.begin());
//   set<int> trem;
//   while(!avl.empty()){
//    auto k = *avl.begin();
//    avl.erase(avl.begin());
//    set<int> trem;
//    for (auto j : rem)
//    {   
//     if (!adj[k].count(j))
//     {
//      avl.insert(j);
//      trem.insert(j);
//     }
//    }
//    for (auto j : trem)
//    {
//     rem.erase(j);
//     avl.insert(j);
//    }
//   }
//   res++;
//  }
//  res--;
//  cout<<res<<endl;
// }`,
//   },
// ]

const ViewSubmissions = () => {
  const [subs, setSubs] = useState([])
  const fetchData = async () => {
    await axios({
      method: 'get',
      url: 'http://localhost:8000/api/v1/getAllSubmissions',
    }).then((res)=>{
      setSubs(res.data.data.reverse())
    }).catch((err)=>{
      console.log(err)
      toast.error('Oops server timed out !!')
    })
    
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div
      style={{
        height: '100vh',
        width: 'full',
        backgroundColor: 'black',
        paddingTop: '10px',
      }}
    >
      <ToastContainer/>
      {subs.length === 0 ? (
        <div style={{ backgroundColor: 'black' }}>
          <p
            style={{
              fontSize: '35px',
              color: 'white',
              fontFamily: 'Courier New, Courier, monospace',
              textAlign: 'center',
            }}
          >
            NO SUBMISSONS YET
          </p>
        </div>
      ) : (
        <div>
          {subs.map((it, index) => {
            return <Submission data={it} key={index} />
          })}
        </div>
      )}
    </div>
  )
}

export default ViewSubmissions
