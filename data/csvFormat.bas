Attribute VB_Name = "Module1"
Sub csvFormat()
Attribute csvFormat.VB_ProcData.VB_Invoke_Func = " \n14"

Application.ScreenUpdating = False



Dim year As String
Dim street1 As String
Dim street2 As String
Dim change1 As Boolean
Dim change2 As Boolean
Dim sh1 As Worksheet
Dim sh2 As Worksheet
Set sh1 = Sheets("portland_accidents")
Set sh2 = Sheets("Formatted")


For i = 2 To 1087

    year = sh1.Cells(i, 5).Value
    street1 = sh1.Cells(i, 1)
    street2 = sh1.Cells(i, 2)
    change1 = False
    change2 = False
    
    sh2.Activate
    
    If sh2.UsedRange.Rows.Count < 2 Then
        Cells(2, 1) = street1
        Cells(2, 2) = year
        Cells(2, 3) = 1
        Cells(2 + 1, 1) = street2
        Cells(2 + 1, 2) = year
        Cells(2 + 1, 3) = 1
        GoTo Skip
        
    End If
    
    For j = 2 To sh2.UsedRange.Rows.Count + 2
        
        If Cells(j, 1) Like street1 And Cells(j, 2) Like year Then
            Cells(j, 3) = Cells(j, 3) + 1
            change1 = True
        End If
        If Cells(j, 1) Like street2 And Cells(j, 2) Like year Then
            Cells(j, 3) = Cells(j, 3) + 1
            change2 = True
        End If
        If Cells(j, 1) Like "" And Not change1 Then
            Cells(j, 1) = street1
            Cells(j, 2) = year
            Cells(j, 3) = 1
            change1 = True
        End If
        If Cells(j, 1) Like "" And Not change2 Then
            Cells(j, 1) = street2
            Cells(j, 2) = year
            Cells(j, 3) = 1
            change2 = True
        End If
        If change1 And change2 Then
            Exit For
        End If
        
    Next j

Skip:

    sh1.Activate
    
Next i


End Sub
