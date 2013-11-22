#pragma strict

private var ray : Ray;
private var hit : RaycastHit;

function Start ()
{
    Random.seed = Time.time;
}

function Update () {
	
/*	if (Input.GetMouseButton(0))
	{
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, hit))
		{
			Debug.Log("Working?");
			transform.position.x = hit.point.x;
			transform.position.y = hit.point.y;
		}
		else
		{
			Debug.Log("Not working");
		}
	}
*/	
}

function OnMouseDown ()
{
//    var r : float = Random.Range(0f,1f);
//    var g : float = Random.Range(0f,1f);
//    var b : float = Random.Range(0f,1f);
//    var randomColour : Color = new Color(r,g,b,1f);
    
//    renderer.material.color = randomColour;
}

function OnMouseDrag () {
//		renderer.material.color -= Color.white * Time.deltaTime;

}
	
function OnMouseUp () {
//		Debug.Log("Drag ended!");
}	
	