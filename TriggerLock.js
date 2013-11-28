#pragma strict

// Author: Meepu
// For London Is a Maze demo puzzle

// Check if road piece is correctly positioned

// Use on objects with 
// a collider with isTrigger = true
// a tag that corresponds to a road piece's tag

private var myTransform : Transform;

function Start () {
	myTransform = transform;
}

function Update () {

}

// Script runs when another game object with a collider enters the area
function OnTriggerStay2D (other : Collider2D) {

	// We're not interested unless player leaves the piece here
	if (Input.GetMouseButtonUp(0))
	{

		// Check that we have the correct object
		// (so we don't lock piece #7 to where piece #4 belongs)
		if (other.tag == myTransform.tag)
		{

			// Check if the object is in the middle of the target area
			// Because of floats, the comparison never returns true unless we round
			if (Mathf.Round(other.transform.position.x*10) == Mathf.Round(myTransform.position.x*10) 
				&& Mathf.Round(other.transform.position.y*10) == Mathf.Round(myTransform.position.y*10))
			{
				// Lock the object
				// When we destroy the collider, the object can no longer move
				Destroy(other.collider2D);
				
				// Change color to show player the position is correct
				other.renderer.material.color = Color.green;

				var correctPieces = 0;
				
				var piecesToCheck = ["piece1", "piece2", "piece3", "piece4", "piece5", "piece6", "piece7"];
				for (var pieceToCheck in piecesToCheck)
				{
					// Assuming there are exactly two objects tagged with "piece#"
					// One of them should be the road piece and one the target area
					var pieces = GameObject.FindGameObjectsWithTag(pieceToCheck);
					if (pieces[0] && pieces[1] 
						&& Mathf.Round(pieces[0].transform.position.x*10) == Mathf.Round(pieces[1].transform.position.x*10) 
						&& Mathf.Round(pieces[0].transform.position.y*10) == Mathf.Round(pieces[1].transform.position.y*10))
						correctPieces++;
					
				}
				
				if (correctPieces == 7)
					Debug.Log("SUCCESS!"); // todo: this should display a message box
				
			}
		}
	}
}
