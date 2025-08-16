//your JS code here. If required.
const number = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

button.addEventListener('click', ()=>{
	output.innerHTML = "";
	const promise = new Promise((resolve)=>{
		setTimeout(()=>{
			let value = parseInt(number.value);
			output.innerHTML += `<p>Result: ${value}</p>`
			resolve (value);
		},2000);
	});
	
	promise.then((val)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let res = val * 2;
				output.innerHTML += `<p>Result: ${res}</p>`;
				resolve(res);
			},2000);
		});
	})
	.then((val)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
			let res = val - 3;
			output.innerHTML += `<p>Result: ${res}</p>`;
			resolve(res);
			},1000);
		});
	})
	.then((val)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
			let res = val / 2;
			output.innerHTML += `<p>Result: ${res}</p>`;
			resolve(res);
			},1000);
		});
	})
	.then((val)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
			let res = val + 10;
			output.innerHTML += `<p>Result: ${res}</p>`;
			resolve(res);
			},1000);
		});
	})
	.then((final)=>{
		output.innerHTML += `<p>Final Result: ${final}</p>`;
	});
});


