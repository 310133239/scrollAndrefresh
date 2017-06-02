  function showTime (time) {
            var timeStr = time ;  //获得的时间字符串.
            if(timeStr==null || timeStr==''){
                return;
            }
            var end_str = (timeStr).replace(/-/g,"/");
            var class_time = new Date(end_str);
            var month=class_time.getMonth()+1;
            var day=class_time.getDate();
            var hour=class_time.getHours();
            var minute=class_time.getMinutes();
            var now_time = new Date();
            var totalSecs=(now_time-class_time)/1000;
            var days=Math.floor(totalSecs/3600/24);
            var hours=Math.floor((totalSecs-days*24*3600)/3600);
            var mins=Math.floor((totalSecs-days*24*3600-hours*3600)/60);
            var secs=Math.floor((totalSecs-days*24*3600-hours*3600-mins*60));
            if (days >=1 ) {
                hour = hour<10? '0'+hour:hour;
                minute = minute<10? '0'+minute:minute;
                return month +'月'+ day +'日 '+ hour +'时:'+ minute+'分';
            }else if (hours == 0 && mins == 0) {
                return "刚刚";
            }else if (hours == 0 && mins != 0) {
                return mins+"分钟前";
            }else if (hours != 0) {
                return hours+"小时前";
            }
        }