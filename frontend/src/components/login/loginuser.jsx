import { useState , useContext } from "react";
import { Dialog ,  Box , TextField, Typography, Button , styled} from "@mui/material";
import { authenticationsignup , authenticationlogin} from '../../service/api';
import { Datacontext } from '../../context/dataprovider';

const Component=styled(Box)`
    display:flex;
    height :70vh;
    width:90vh;
    padding:0;
`
const Imagebox=styled(Box)`
        background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
        ) center 85% no-repeat;
        height:80%;
        width:28%;
        padding:45px 35px;
        & > p, & > h5{
           color:#ffffff;
           font-weight:600;
        }
`
const Wrapper= styled(Box)`
        display:flex;
        flex-direction:column;
        padding:25px 35px;
        flex:1;
        & > div , & > button , & > p{
            margin-top:20px;
        }


`

const Otpbutton=styled(Button)`
      text-transform: none;
      background:#fff;
      color:#2874f0;
      box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Loginbutton=styled(Button)`
       text-transform:none;
       background:#fb641b;
       color: #fff;
       height:48px;
       border-radius:2px
`
const Text= styled(Typography)`
       font-size: 12px;
       color: #878787;
`
const Createacct= styled(Typography)`
       font-size:14px;
       Text-align:center;
       color: #2874f0;
       font-weight:530; 
       cursor:pointer;
`
const Error= styled(Typography)`
       font-size:10px;
       color:#ff6161;
       line-height:0;
       margin-top:10px;
       font-weight:600
`
const accountinitial={
    login:{
        view:'login',
        heading :"Login",
        subheading:"Get access to your Orders, Wishlist and Recommendations"

    },
    signup:{
        view:'signup',
        heading:"Looks like you're now here!",
        subheading:"Sign up with your mobile number to get started"
    }
}

const signupinitial={
         username:"",
         lastname:"",
         email:"",
         password:"",
         phone:""
}

const logininitial={
    username:"",
    password:""
}

const Loginuser =({Open,SetOpen})=>{


    const [account,toggleaccnt]=useState(accountinitial.login)
    const [signup , setsignup] =useState(signupinitial)
    const [login, setlogin] =useState(logininitial)
    const [error,setError]=useState(false)

    const {setAccount}=useContext(Datacontext);

    const handleClose =()=>{
        SetOpen(false);
        toggleaccnt(accountinitial.login);
        setError(false);

    }

    const togglesignup=()=>{
        toggleaccnt(accountinitial.signup);
    }

    const onInputChange=(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value});
    }
    const signupuser=async()=>{
       let response = await authenticationsignup(signup);
          if (response) return;
          handleClose();
          setAccount(signup.username);
    }

    const onValueChange=(e)=>{
         setlogin({...login,[e.target.name]:e.target.value});
    }

    const Loginuser= async()=>{
         let response=await authenticationlogin(login);
         if(!response){
            setError(true);
            }
            else{
            setError(false);
            handleClose();
            setAccount(login.username);
        }

         
    }
    return(
        <Dialog open = {Open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}} >
            <Component>
                <Imagebox> 
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subheading}</Typography>
                </Imagebox>
                { account.view==='login' ?
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='username' label="Enter username"/>
                    {error &&<Error>Please enter vaild username and password </Error>}
                    <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='password' label="Enter Password"/>
                    <Text>By containing, you agree to flipkart's Terms of use and Privacy Policy</Text>
                    <Loginbutton onClick={()=>Loginuser()}>Login</Loginbutton>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <Otpbutton>Request OTP</Otpbutton>
                    <Createacct onClick={()=>togglesignup()}>New to Flipkart? Create an account</Createacct>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="Enter username "/>    
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='lastname' label="Enter Lastname"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label="Enter Email"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='password' label="Enter Password"/>
                    <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='phone' label="Enter Phone no."/>
                    <Loginbutton onClick={()=>signupuser()}>Continue</Loginbutton>
                </Wrapper>
                }
            </Component>
        </Dialog>
    )
}


export default Loginuser;